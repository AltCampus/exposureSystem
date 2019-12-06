const contentState = {
  content: ""
};
function contentReducer(state = contentState, action) {
  switch (action.type) {
    case "CONTENT_LIST":
      return { ...state, content: action.payload };
    default:
      return state;
  }
}

export default contentReducer;
