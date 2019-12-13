const studentLogin = (loginData, cb) => dispatch => {
  dispatch({
    type: 'STUDENT_LOGIN_START',
  });
  fetch('http://localhost:3000/api/v1/student/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: loginData,
  })
    .then(res => res.json())
    .then(studentData =>
      dispatch({
        type: 'STUDENT_LOGIN_SUCCESS',
        data: studentData,
      }),
    );
  cb();
};

module.exports = studentLogin;
