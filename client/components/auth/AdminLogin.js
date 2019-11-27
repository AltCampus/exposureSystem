import React, { Component } from "react";

class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="wrapper text-center">
        <h1 className="heading">Admin-Login</h1>
        <div>
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
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br></br>

          <input
            className="input"
            type="text"
            name="password"
            placeholder="Enter password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br></br>

          <button className="button">Submit</button>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
