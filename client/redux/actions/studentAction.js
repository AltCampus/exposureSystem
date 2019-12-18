const studentLogin = (loginData, cb) => {
  return dispatch => {
    dispatch({
      type: 'STUDENT_LOGIN_START',
    });
    fetch('http://localhost:3000/api/v1/student/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(studentData => {
        localStorage.setItem('token', studentData.token);
        dispatch({
          type: 'STUDENT_LOGIN_SUCCESS',
          data: studentData,
        }),
          cb(studentData.student.isApproved);
      });
  };
};

const studentLogout = cb => dispatch => (
  {
    type: 'STUDENT_LOGOUT',
  },
  cb()
);

module.exports = { studentLogin, studentLogout };
