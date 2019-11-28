import React, { Component } from 'react';

class LoginUser extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// This Section is comment out

	// handleSubmit = e => {
	//   e.preventDefault();
	//   this.postLoginData();
	// };

	// postLoginData = () => {
	//   const user = {
	//     email: this.state.email,
	//     password: this.state.password
	//   };
	//   console.log(user);

	//   fetch("/users/login", {
	//     method: "POST",
	//     headers: {
	//       "Content-Type": "application/json"
	//     },
	//     body: JSON.stringify(user)
	//   })
	//     .then(res => res.json())
	//     .then(user => {
	//       console.log(user);
	//       // this.props.dispatch({ type: "UpdateState", UserData: user });
	//       // localStorage.setItem("Data", JSON.stringify(user));
	//       // localStorage.setItem("Token", user.user.token);
	//       // localStorage.Token
	//       //   ? this.props.history.push("/Homepage")
	//       //   : this.setState({ ...this.state, autherisation: user.user });
	//     });
	// };
	handleLogin = (e) => {
		e.preventDefault();
		var studentData = {
			email: this.state.email,
			password: this.state.password
		};
		console.log(studentData, 'student data');
		fetch('/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(studentData)
		})
			.then((res) => res.json())
			.then(this.props.history.push("/Home"))
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

							<button className="button" onClick={this.handleLogin}>
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
