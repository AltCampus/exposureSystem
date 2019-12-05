const userState = {
	userData: ''
};

function userReducer(state = userState, action) {
	switch (action.type) {
		case 'USERLOGGEDIN':
			return {
				...userState,
				userData: action.payload
			};
		default:
			return state;
	}
}

export default userReducer;
