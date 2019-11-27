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

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(user => {
        console.log(user);
        // this.props.dispatch({ type: "UpdateState", UserData: user });
        // localStorage.setItem("Data", JSON.stringify(user));
        // localStorage.setItem("Token", user.user.token);
        // localStorage.Token
        //   ? this.props.history.push("/Homepage")
        //   : this.setState({ ...this.state, autherisation: user.user });
      });
  };

  render() {
    // console.log(this.state);
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
