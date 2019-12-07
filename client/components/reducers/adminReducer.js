const adminState = {
  adminData: '',
};
function adminReducer(state = adminState, action) {
  switch (action.type) {
    case 'ADMIN_LOGIN_SUCCESSFUL':
      return {
        ...state,
        adminData: action.payload,
      };
    default:
      return state;
  }
}

export default adminReducer;
