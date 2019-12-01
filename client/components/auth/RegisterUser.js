import React, { Component } from "react";

class RegisterUser extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit called");
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    fetch("/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(user => {
        console.log(user, "final user");
      })
      .then(this.props.history.push("/login"));
  };

  render() {
    return (
      <div className="wrapper card text-center">
        <h1 className="heading">Register</h1>
        <form onSubmit={this.handleSubmit}>
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
            type="email"
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

          <button className="button">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterUser;
