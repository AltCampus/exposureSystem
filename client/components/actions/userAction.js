const userLoggedIn = (dispatch, userCredentials) => {
  console.log("in login action")
  return dispatch => {
    fetch('/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    })
      .then(res => res.json())
      .then(user => {
        // console.log(user, 'in user action');
        dispatch({ type: 'USER_LOGIN_SUCCESSFULL', payload: user });
        // localStorage.setItem("userToken", user.Token)
        // this.setState({email : user.user.email , username : user.user.username , isLoggedin: true })
      });
  };
};


const userRegister = userCredentials => {
  return dispatch => {
    fetch('/api/v1/users/register', {
      method: 'POST',
      body: JSON.stringify(userCredentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(user => {
        dispatch({ type: 'USER_REGISTER_SUCCESSFULL', payload: user });
      });
  };
};


const userLogout = (dispatch,userCredentials) => {
  console.log("in user logout in actions")
  return dispatch => {
    dispatch({
      type : 'USER_LOGOUT',
      payload : null
    })
  }
}

module.exports= {userLoggedIn , userLogout ,userRegister};