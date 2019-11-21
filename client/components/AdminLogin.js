import React, { Component } from "react";

class AdminLogin extends Component {
<<<<<<< HEAD
  constructor() {
    super();
    this.state = {
      username: "",
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
=======
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="Adminlogin">
                <h1>Admin-Login</h1>
                <div>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <br></br>

                    <input 
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <br></br>

                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <br></br>

                    <button>Submit</button>
                </div>
            </div>
        )
    }

>>>>>>> 1a071218739e2140140799f1168498b7ba418c55
}

export default AdminLogin;
