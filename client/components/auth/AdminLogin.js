import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions/action';
class AdminLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		console.log(this.props, 'in login');
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
					<br />

					<input
						className="input"
						type="text"
						name="email"
						placeholder="Enter email"
						onChange={this.handleChange}
						value={this.state.email}
					/>
					<br />

					<input
						className="input"
						type="text"
						name="password"
						placeholder="Enter password"
						onChange={this.handleChange}
						value={this.state.password}
					/>
					<br />

					<button className="button">Submit</button>
				</div>
			</div>
		);
	};
}
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps, {loggedIn})(AdminLogin);
