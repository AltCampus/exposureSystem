const adminState = {
  adminData: ""
};
function adminReducer(state = adminState, action) {
  switch (action.type) {
    case "ADMINLOGGEDIN":
      return {
        ...adminState,
        adminData: action.payload
      };
    default:
      return state;
  }
}

export default adminReducer;
