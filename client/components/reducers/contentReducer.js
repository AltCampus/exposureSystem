const contentState = {
  content: '',
};


function contentReducer(state = contentState, action) {
  console.log("in content action")
  switch (action.type) {
    case 'NEW_CONTENT_ADDED':
      return { ...state, content: action.payload }
    case 'GET_CONTENT':
      return {...state, content: action.payload}
    default:
      return state;
  }
}


export default contentReducer;
