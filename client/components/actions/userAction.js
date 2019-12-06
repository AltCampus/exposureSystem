export const userLoggedIn = studentData => {
  return dispatch => {
    fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then(res => res.json())
      .then(user => {
        console.log(user, "in user action");
        dispatch({ type: "USER_LOGGEDIN", payload: user });
      });
  };
};

export const userRegister = userCredentials => {
  return dispatch => {
    fetch("/api/v1/users/register", {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(user => {
        dispatch({ type: "USER_REGISTER", payload: user });
      });
  };
};
