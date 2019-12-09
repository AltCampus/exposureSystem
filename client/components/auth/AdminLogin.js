import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store/store';
import { adminloggedIn, adminLogout } from '../actions/adminAction';
// import Header from "../header/Header"

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'admin@altcampus.io',
      password: 'drybar',
      // admin: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAdminLogin = e => {
    console.log("inside handleAdmin Login")
    e.preventDefault();
    const adminCredentials = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.adminloggedIn(adminCredentials);
    store.subscribe(() => {
      console.log(store, "store")
      console.log(store.getState(), "in admin component");
      store.getState().adminReducer.adminData.Token
        ?  alert('admin login sucessfull')
        : this.setState({
          ...this.state,
          admin: "Please Check Admin Credentials!"
        });
    });
    this.props.history.push("/admin/feed")
  };
  render() {
    // console.log(this.props)
    return (
      <>
      {/* <Header /> */}
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

          <button className="button" type="submit" onClick={this.handleAdminLogin}>
            Submit
          </button>
        </div>
      </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { adminloggedIn, adminLogout })(AdminLogin);
