const adminLogin = (adminCredentials, cb) => {
  return dispatch => {
    dispatch({
      type: 'ADMIN_LOGIN_START',
    });
    // console.log('inside adminaction');
    fetch('http://localhost:3000/api/v1/admin/login', {
      method: 'POST',
      body: JSON.stringify(adminCredentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(admin => {
        localStorage.setItem('token', admin.token);
        dispatch({
          type: 'ADMIN_LOGIN_SUCCESSFUL',
          data: admin,
        });
        cb();
      });
  };
};

const fetchStudentList = () => {
  return dispatch => {
    dispatch({
      type: 'FETCHING_STUDENT_LIST_START',
    });
    fetch('http://localhost:3000/api/v1/student/list')
      .then(res => res.json())
      .then(studentList =>
        dispatch({
          type: 'FETCHING_STUDENT_LIST_SUCCESS',
          data: studentList,
        }),
      );
  };
};

const fetchPendingApprovalList = () => dispatch => {
  dispatch({
    type: 'FETCHING_PENDING_APPROVALS_START',
  });
  fetch('http://localhost:3000/api/v1/admin/pending-approvals', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  })
    .then(res => res.json())
    .then(pendingApprovals =>
      dispatch(
        {
          type: 'FETCHING_PENDING_APPROVALS_SUCCESS',
          data: pendingApprovals,
        },
        // console.log(pendingApprovals),
      ),
    );
};

const approveStudent = (id, token, cb) => dispatch => {
  fetch('http://localhost:3000/api/v1/admin/pending-approvals/approved/:id', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `localStorage.getItem(${token})`,
    },
    body: { id },
  });
  cb();
};

const removeStudent = (id, token, cb) => dispatch => {
  fetch('http://localhost:3000/api/v1/admin/pending-approvals/remove/:id', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `localStorage.getItem(${token})`,
    },
    body: { id },
  });
  cb();
};

const adminLogout = () => dispatch => {
  dispatch({ type: 'ADMIN_LOGOUT' });
};

module.exports = {
  adminLogin,
  fetchStudentList,
  fetchPendingApprovalList,
  approveStudent,
  removeStudent,
  adminLogout,
};
