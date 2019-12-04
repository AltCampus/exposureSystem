import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminloggedIn } from '../actions/adminAction';
class AdminLogin extends Component {
	constructor(props) {
		super(props);
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

	handleAdminLogin = (e) => {
		e.preventDefault();
		const adminCredentials = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.adminloggedIn(adminCredentials);
	};
	render() {
		return (
			<div className="wrapper text-center">
				<h1 className="heading">Admin-Login</h1>
				<div>
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
						type="password"
						name="password"
						placeholder="Enter password"
						onChange={this.handleChange}
						value={this.state.password}
					/>
					<br />

					<button className="button" onClick={this.handleAdminLogin}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps, { adminloggedIn })(AdminLogin);
