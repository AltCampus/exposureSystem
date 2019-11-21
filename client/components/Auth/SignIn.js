import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="wrapper text-center">
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

export default SignIn;
