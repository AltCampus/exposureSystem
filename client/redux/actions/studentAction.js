const studentLogin = (loginData, cb) => {
  return dispatch => {
    dispatch({
      type: 'STUDENT_LOGIN_START',
    });
    // console.log('dispatch sent');
    fetch('http://localhost:3000/api/v1/student/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(studentData => {
        console.log(studentData, 'studentdata');
        // console.log('inside action');

        dispatch({
          type: 'STUDENT_LOGIN_SUCCESS',
          data: studentData,
        }),
          cb();
      });
  };
};

module.exports = studentLogin;
