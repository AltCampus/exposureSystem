const adminState = {
  adminData: '',
  isLoggedIn: false
};
function adminReducer(state = adminState, action) {
  switch (action.type) {
    case 'ADMIN_LOGIN_SUCCESSFUL':
      return {
        ...state,
        adminData: action.payload,
        isLoggedIn: true
      }
    case "ADMIN_LOGOUT":
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state;
  }
}

export default adminReducer;
