const userState = {
  userLoginData: '',
  userRegisterData: '',
};

function userReducer(state = userState, action) {
  switch (action.type) {
    case 'USER_REGISTER_SUCESSFULL':
      return {
        ...userState,
        userRegisterData: action.payload,
      };
    case 'USER_LOGIN_SUCCESSFUL':
      return {
        ...userState,
        userLoginData: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
