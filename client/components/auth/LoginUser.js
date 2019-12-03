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

  handleSubmit = e => {
    e.preventDefault();
    this.postLoginData();
  };

  postLoginData = e => {
    var studentData = {
      email: this.state.email,
      password: this.state.password
    };
    // console.log(studentData, "student data");
    fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then(res => res.json())
      .then(user => console.log(user))
      .then(this.props.history.push("/"));
    //TODO
    //change redirect route
  };

  render() {
    return (
      <div>
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

              <button className="button" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginUser;
