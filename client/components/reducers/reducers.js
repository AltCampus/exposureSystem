const state = {
  A: ""
};
function rootReducer(state, action) {
  switch (action.type) {
    case A:
      return {
        ...state,
        A: action.Object
      };
  }
}

export default handleReducer;
