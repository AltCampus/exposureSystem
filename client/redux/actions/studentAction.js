const studentLogin = (loginData, cb) => {
  console.log('inside action');
  return dispatch => {
    dispatch({
      type: 'STUDENT_LOGIN_START',
    });
    fetch('http://localhost:3000/api/v1/students/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(studentData => {
        console.log(studentData, 'loginaction');
        localStorage.setItem('token', studentData.token);
        dispatch({
          type: 'STUDENT_LOGIN_SUCCESS',
          data: studentData,
        }),
          cb(studentData.student.isApproved);
      })
      .catch(err => {
        swal({
          title: 'Sorry',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          button: 'Go Back',
        });
      });
  };
};

const updateProfile = toUpdateData => {
  console.log('in action', toUpdateData);
  return dispatch => {
    dispatch({
      type: 'STUDENT_PROFILE_UPDATE_START',
    });
    fetch('http://localhost:3000/api/v1/students/update', {
      method: 'PUT',
      body: JSON.stringify(toUpdateData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(updatedData => {
        console.log(updatedData, 'updated Student');
        dispatch({
          type: 'STUDENT_PROFILE_UPDATE_SUCCESS',
          data: updatedData,
        });
      });
  };
};

const studentLogout = cb => dispatch => (
  {
    type: 'STUDENT_LOGOUT',
  },
  cb()
);

module.exports = { studentLogin, studentLogout, updateProfile };
