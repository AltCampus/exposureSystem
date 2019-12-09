export const adminloggedIn = (dispatch, adminCredentials) => {
  console.log("in admin login action")
  return dispatch => {
    fetch('/api/v1/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adminCredentials),
    })
      .then(res => res.json())
      .then(admin => {
        console.log(admin)
        localStorage.setItem('token', admin.Token);
        dispatch({ type: 'ADMIN_LOGIN_SUCCESSFULL', payload: admin });
      });
  };
};

export const pendingApprovals = (dispatch) => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/admin/pending-approvals", {
      method: "GET"
    })
      .then(res => res.json())
      .then(pendingApprovals => {
        dispatch({ type: "PENDING_APPROVALS", payload: pendingApprovals })
      })
  }
}

export const adminLogout = (dispatch) => {
  console.log("inside adminLogout action")
  return dispatch => {
    dispatch({ type: "ADMIN_LOGOUT" })
  }
}
