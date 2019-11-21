import React, { Component } from "react"
 
class Login extends Component {
    constructor() {
        super()
        this.state = {
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
        console.log(this.state)
        return (
            <div className="login">
                <h1>Login</h1>
                <div>
                    <div>
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
            </div>
        )
    }

}


export default Login