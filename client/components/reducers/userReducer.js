const userState = {
  userLoginData: '',
  userRegisterData: '',
  isLoggedIn: false
};


function userReducer(state = userState, action) {
  // console.log(action,"action in user reducer");
  switch (action.type) {
    case 'USER_REGISTER_SUCCESSFULL':
      return {
        ...state,
        userRegisterData: action.payload,
      };
    case 'USER_LOGIN_SUCCESSFULL':
      return {
        ...state,
        userLoginData: action.payload,
        isLoggedIn: true
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userLoginData: ""
      };
    default:
      return state;
  }
}

export default userReducer;
