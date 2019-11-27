import React, { Component } from "react";

class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="wrapper card text-center">
          <h1 className="heading">Login</h1>
          <div>
            <div>
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
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleChange}
                value={this.state.password}
              />

              <br></br>

              <button className="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginUser;