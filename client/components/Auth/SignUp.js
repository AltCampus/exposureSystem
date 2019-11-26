import React, { Component } from "react";

class SignUp extends Component {
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
    console.log(data);
    fetch("/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(user => {
        console.log(user, "user created");
        return res.redirect("/signin");
        // if (response.status >= 200 && response.status < 300) {
        //   console.log(response);
        //   return response;
        // } else {
        //   console.log("Somthing went wrong");
        // }
      })
      .catch(err => err);
  };

  // registerUser = () => {
  //   e.preventDefault();
  //   console.log("registeruser called");
  //   const data = {
  //     username: this.state.username,
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  // fetch("http://localhost:3000/users", {
  //   method: POST,
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(data)
  // })
  //   .then(res => res.json())
  //   .then(user => {
  //     console.log(user);
  //   });
  // };
  render() {
    // console.log("signup")
    return (
      <div className="wrapper card text-center">
        <h1 className="heading">Sign Up</h1>
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
        </form>
      </div>
    );
  }
}

export default SignUp;
