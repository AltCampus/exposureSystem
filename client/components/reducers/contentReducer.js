const contentState = {
	content: ''
};
function contentReducer(state = contentState, action) {
	switch (action.type) {
		case 'CONTENT':
			return { ...contentState, content: action.payload };
		default:
			return state;
	}
}

export default contentReducer;
