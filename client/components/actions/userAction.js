export const userLoggedIn = (studentData) => {
	return (dispatch) => {
		fetch('/api/v1/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(studentData)
		})
			.then((res) => res.json())
			.then((user) => {
				dispatch({ type: 'USERLOGGEDIN', payload: user });
			});
	};
};
