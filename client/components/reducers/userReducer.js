const userState = {
  userLoginData: "",
  userRegisterData: ""
};

function userReducer(state = userState, action) {
  switch (action.type) {
    case "USER_REGISTER":
      return {
        ...userState,
        userRegisterData: action.payload
      };
    case "USER_LOGGEDIN":
      return {
        ...userState,
        userLoginData: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;
