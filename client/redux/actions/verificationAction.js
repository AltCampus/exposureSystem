const verifyUser = () => dispatch => {
    //TODO Store user/admin in reducer
    fetch('http://localhost:3000/api/v1/admin/me', {
      method: 'GET',
      headers: {
        authorization: localStorage.token,
        'content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(admin => {
        if (admin) {
          dispatch({
            type: 'ADMIN_LOGIN_SUCCESS',
            data: admin,
          });
        } else {
          fetch('http://localhost:3000/api/v1/students/me', {
            method: 'GET',
            headers: {
              authorization: localStorage.token,
              'content-Type': 'application/json',
            },
          })
            .then(res => res.json())
            .then(student => {
              dispatch({
                type: 'STUDENT_LOGIN_SUCCESS',
                data: student,
              });
            });
        }
      });
  };


  module.export = {verifyUser};