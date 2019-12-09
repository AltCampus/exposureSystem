const adminState = {
  adminData: '',
  isLoggedIn: false
};

function adminReducer(state = adminState, action) {
  console.log(action, "action in admin reducer")
  switch (action.type) {
    case 'ADMIN_LOGIN_SUCCESSFULL':
      return {
        ...state,
        adminData: action.payload,
        isLoggedIn: true
      }
    case "ADMIN_LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        adminData: ""
      }
    default:
      return state;
  }
}

export default adminReducer;
