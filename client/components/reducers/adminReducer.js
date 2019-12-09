const adminState = {
  adminData: '',
  isLoggedIn: false,
  pendingApprovals: ""
};

function adminReducer(state = adminState, action) {
  // console.log(action, "action in admin reducer")
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
    case "PENDING_APPROVALS":
      return {
        ...state,
        pendingApprovals: action.payload
      }
    default:
      return state;
  }
}

export default adminReducer;
