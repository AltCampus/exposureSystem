import React, { Component } from "react"

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="signup">
                <h1>SignUp</h1>
                <div>
                    <input type="text"
                        name="username"
                        placeholder="Enter username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <br></br>

                    <input type="text"
                        name="email"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <br></br>

                    <input type="password"
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

}

export default SignUp