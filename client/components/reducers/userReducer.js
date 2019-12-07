const userState = {
  userLoginData: '',
  userRegisterData: '',
  isLoggedIn : false
};

function userReducer(state = userState, action) {
  switch (action.type) {
    case 'USER_REGISTER_SUCCESSFULL':
      return {
        ...userState,
        userRegisterData: action.payload,
      };
    case 'USER_LOGIN_SUCCESSFULL':
      return {
        ...userState,
        userLoginData: action.payload,
        isLoggedIn : true
      };
      case 'USER_LOGOUT':
      return {
        ...userState,
        isLoggedIn : false,
        
      };
    default:
      return state;
  }
}

export default userReducer;
